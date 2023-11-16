type Props = {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
};

type ApplyProps = {
  offerId: string;
  name: string;
  email: string;
  phone?: string;
};

export const emailGenerator = ({
  name,
  email,
  phone,
  subject,
  message,
}: Props) => {
  return `<!doctype html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"/>
  <style>html,body{margin:0 auto!important;padding:0!important;height:100%!important;width:100%!important;}*{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}div[style*='margin:16px 0']{margin:0!important;}table,td{mso-table-lspace:0pt!important;mso-table-rspace:0pt!important;}table{border:0;border-spacing:0;border-collapse:collapse;}img{-ms-interpolation-mode:bicubic;}a{text-decoration:none;}a[x-apple-data-detectors]{border-bottom:0!important;cursor:default!important;color:inherit
  !important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important;}
  @media only screen and (min-device-width:320px) and (max-device-width:374px){u~div .email-container{min-width:320px!important;} }
  @media only screen and (min-device-width:375px) and (max-device-width:413px){u~div .email-container{min-width:375px!important;} }
  @media only screen and (min-device-width:414px){u~div .email-container{min-width:414px!important;} }
  </style>
  <!--[if gte mso 9 ]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch >96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  <![endif]-->
  <style>.has-markdown a,.has-markdown a:visited{color:#0077cc!important;text-decoration:none!important;}code{padding:1px 5px;background-color:#eff0f1;color:#242729;font-size:13px;line-height:inherit;font-family:Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif;}pre{margin:0 0 15px;line-height:17px;background-color:#eff0f1;padding:4px 8px;border-radius:3px;overflow-x:auto;}pre code{margin:0 0 15px;padding:0;line-height:
  17px;background-color:none;}blockquote{margin:0 0 15px;padding:4px 10px;background-color:#fff8dc;border-left:2px solid #ffeb8e;}blockquote p{padding:4px 0;margin:0;overflow-wrap:break-word;}.bar{border-radius:5px;}
  @media screen and (max-width:680px){.sm-p{padding:20px!important;}.bar{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;} }
  </style>
  </head>
  <body width="100%" style="margin:0;padding:0!important;background:#f3f3f5;mso-line-height-rule:exactly;"><center style="width:100%;background:#f3f3f5">
  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f3f3f5;"><tr><td>
  <![endif]--><div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family:sans-serif;"> Wypełniono formularz kontaktowy </div><div class="email-container" style="max-width:680px;margin:0 auto">
  <!--[if mso]>
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center"><tr><td>
  <![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:680px;width:100%"><tr><td aria-hidden="true" height="30" style="font-size:0;line-height:0px"> &nbsp;
  </td></tr><tr><td style="padding:30px;background-color:#ffffff" class="sm-p bar">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%"><tr><td style="padding-bottom:15px;font-family:arial,sans-serif;font-size:15px;line-height:21px;color:#3c3f44;text-align:left;"><h1 style="font-weight:bold;font-size:27px;line-height:27px;color:#0c0d0e;margin:0 0 15px 0;"> Wypełniono formularz kontaktowy </h1><p style="margin:0 0 15px" class="has-markdown"> Poniżej znajdziesz treść wiadomości </p><ul style="padding:0;margin:0;list-style-type:disc"><li
  style="margin:0 0 10px 30px"> Nadawca: <span style="font-weight:700">${name}</span></li><li style="margin:0 0 10px 30px"> Email: <span style="font-weight:700">${email}</span></li><li style="margin:0 0 10px 30px"> Nr telefonu: <span style="font-weight:700">${
    phone ? phone : 'Brak'
  }</span></li><li style="margin:0 0 10px 30px"> Tytuł: <span style="font-weight:700">${
    subject ? subject : 'Brak'
  }</span></li><li style="margin:0 0 10px 30px"> Wiadomość: <span style="font-weight:700">${
    message ? message : 'Brak'
  }</span></li></ul>
  </td></tr></table>
  </td></tr><tr><td aria-hidden="true" height="30" style="font-size:0;line-height:0px"> &nbsp;
  </td></tr></table></div>
  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]--></center>
  </body>
  </html>
  
    `;
};
export const applyEmailGenerator = ({
  offerId,
  name,
  email,
  phone,
}: ApplyProps) => {
  return `<!doctype html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  <title></title>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="x-apple-disable-message-reformatting"/>
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"/>
  <style>html,body{margin:0 auto!important;padding:0!important;height:100%!important;width:100%!important;}*{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;}div[style*='margin:16px 0']{margin:0!important;}table,td{mso-table-lspace:0pt!important;mso-table-rspace:0pt!important;}table{border:0;border-spacing:0;border-collapse:collapse;}img{-ms-interpolation-mode:bicubic;}a{text-decoration:none;}a[x-apple-data-detectors]{border-bottom:0!important;cursor:default!important;color:inherit
  !important;text-decoration:none!important;font-size:inherit!important;font-family:inherit!important;font-weight:inherit!important;line-height:inherit!important;}
  @media only screen and (min-device-width:320px) and (max-device-width:374px){u~div .email-container{min-width:320px!important;} }
  @media only screen and (min-device-width:375px) and (max-device-width:413px){u~div .email-container{min-width:375px!important;} }
  @media only screen and (min-device-width:414px){u~div .email-container{min-width:414px!important;} }
  </style>
  <!--[if gte mso 9 ]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch >96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  <![endif]-->
  <style>.has-markdown a,.has-markdown a:visited{color:#0077cc!important;text-decoration:none!important;}code{padding:1px 5px;background-color:#eff0f1;color:#242729;font-size:13px;line-height:inherit;font-family:Consolas,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,sans-serif;}pre{margin:0 0 15px;line-height:17px;background-color:#eff0f1;padding:4px 8px;border-radius:3px;overflow-x:auto;}pre code{margin:0 0 15px;padding:0;line-height:
  17px;background-color:none;}blockquote{margin:0 0 15px;padding:4px 10px;background-color:#fff8dc;border-left:2px solid #ffeb8e;}blockquote p{padding:4px 0;margin:0;overflow-wrap:break-word;}.bar{border-radius:5px;}
  @media screen and (max-width:680px){.sm-p{padding:20px!important;}.bar{border-top-left-radius:0;border-top-right-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;} }
  </style>
  </head>
  <body width="100%" style="margin:0;padding:0!important;background:#f3f3f5;mso-line-height-rule:exactly;"><center style="width:100%;background:#f3f3f5">
  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f3f3f5;"><tr><td>
  <![endif]--><div style="display:none;font-size:1px;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;font-family:sans-serif;"> Wypełniono aplikację do oferty </div><div class="email-container" style="max-width:680px;margin:0 auto">
  <!--[if mso]>
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="680" align="center"><tr><td>
  <![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:680px;width:100%"><tr><td aria-hidden="true" height="30" style="font-size:0;line-height:0px"> &nbsp;
  </td></tr><tr><td style="padding:30px;background-color:#ffffff" class="sm-p bar">
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%"><tr><td style="padding-bottom:15px;font-family:arial,sans-serif;font-size:15px;line-height:21px;color:#3c3f44;text-align:left;"><h1 style="font-weight:bold;font-size:27px;line-height:27px;color:#0c0d0e;margin:0 0 15px 0;"> Wypełniono aplikację do oferty </h1><p style="margin:0 0 15px" class="has-markdown"> Poniżej znajdziesz dane </p><ul style="padding:0;margin:0;list-style-type:disc"><li style="margin:0 0
  10px 30px"> Oferta nr: <span style="font-weight:700">${offerId}</span></li><li style="margin:0 0 10px 30px"> Imię: <span style="font-weight:700">${name}</span></li><li style="margin:0 0 10px 30px"> Email: <span style="font-weight:700">${email}</span></li><li style="margin:0 0 10px 30px"> Nr telefonu: <span style="font-weight:700">${phone}</span></li></ul>
  </td></tr></table>
  </td></tr><tr><td aria-hidden="true" height="30" style="font-size:0;line-height:0px"> &nbsp;
  </td></tr></table></div>
  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]--></center>
  </body>
  </html>`;
};
