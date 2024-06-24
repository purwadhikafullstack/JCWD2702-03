import { IReqAccessToken } from '@/helpers/Token';
import { Request, Response, NextFunction } from 'express';
import { UpdateProfileAndImagesProfileServices, createProfileAndImagesProfileServices } from './ProfileService';
import { DeletedUploadFile } from '@/helpers/UserProfile/DeletedProfileFile';

export const createProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = JSON.parse(req.body.data);
    const reqPayload = req as IReqAccessToken;
    const { uid } = reqPayload.payload;

    if (req.files) {
      const uploadedFiles = Array.isArray(req.files)
        ? req.files
        : req.files['profile_images'];

      await createProfileAndImagesProfileServices(data, uploadedFiles, uid);
    }

    res.status(200).send({
      error: false,
      message: 'Create Profile Success!',
      data: null,
    });
  } catch (error) {
    DeletedUploadFile(req.files);
    next(error);
  }
};

export const updateProfileImages = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = JSON.parse(req.body.data);
    const {payload} = req as IReqAccessToken
    
    let updatedFiles
    if(req.files){
      updatedFiles = Array.isArray(req.files) ? req.files : req.files['profile_images']
    }

    const userImagesProfileToDelete = await UpdateProfileAndImagesProfileServices(data, updatedFiles, payload.uid)

    DeletedUploadFile({ profile_images: userImagesProfileToDelete })

    res.status(200).send({
      error: false,
      message: 'Update Profile Success!',
      data: null,
    })
  } catch (error) {
    next(error)
    console.log(error);
    
  }
}
