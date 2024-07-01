import prisma from '@/prisma';

export const createProfileAndImagesProfileServices = async (
  data: any,
  profile_images: any,
  uid: string,
) => {
    const createUserProfile = await prisma.userProfile.create({
      data: {
        fullname: data.fullname,
        birthDate: new Date(data.birthDate),
        userUid:uid,
        addressId: data.addressId,
      },
    });

    const imagesToCreate: any = [];
    profile_images.forEach((item: any) => {
      imagesToCreate.push({
        url: item.path,
        userProfileId: createUserProfile.id,
      });
    });

    const imageProfile = await prisma.userImagesProfile.createMany({
      data: [...imagesToCreate],
    });
};

export const UpdateProfileAndImagesProfileServices = async (
  data: any,
  profile_images: any,
  uid: string,
) => {
  return await prisma.$transaction(async(tx) => {
    const findProfile = await tx.userProfile.findUnique({
      where: {
        userUid: uid,
      },
    });
    if (!findProfile) throw new Error('Profile Not Found!');

    await tx.userProfile.update({
      where: {
        userUid: uid,
      },
      data: {
        fullname: data.fullname,
        birthDate: new Date(data.birthDate),
        addressId: data.addressId,
      },
    });
    console.log(findProfile);
    
    const findUserImagesProfile = await tx.userImagesProfile.findMany({
      where: {
        userProfileId: findProfile.id
      }
    })
    console.log(findUserImagesProfile);
    

    const imagesToCreate: any = [];
    profile_images.forEach((item: any) => {
      imagesToCreate.push({
        url: item.path,
        userProfileId: findProfile.id,
      });
    });

    await tx.userImagesProfile.deleteMany({
      where: {
        userProfileId: findProfile.id
      }
    })

    await tx.userImagesProfile.createMany({
      data: [...imagesToCreate],
    });

    return findUserImagesProfile
  })
}
