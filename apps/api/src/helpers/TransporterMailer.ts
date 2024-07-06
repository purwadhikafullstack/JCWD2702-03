import nodemailer from 'nodemailer'

export const TransporterNodeMailer = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: 'voc.mart.id@gmail.com',
    pass: 'vsjtbhkilskxukkw'
  },
  tls:{
    rejectUnauthorized: false
  }
})