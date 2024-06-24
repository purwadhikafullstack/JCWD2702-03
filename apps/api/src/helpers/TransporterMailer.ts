import nodemailer from 'nodemailer'

export const TransporterNodeMailer = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: 'halloiniiqbal@gmail.com',
    pass: 'wewruamdlhkffhlk'
  },
  tls:{
    rejectUnauthorized: false
  }
})