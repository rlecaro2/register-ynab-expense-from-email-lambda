export const text = `Return-Path: <rafael.lecaros+caf_=visa-bci=rafalecaros.com@gmail.com>
Received: from mail-lf1-f48.google.com (mail-lf1-f48.google.com [209.85.167.48])
 by inbound-smtp.us-east-1.amazonaws.com with SMTP id mki29jcqsevfsggpjqhue2ei5b5ocjlbl1acdu01
 for visa-bci@rafalecaros.com;
 Sat, 04 Apr 2020 21:52:14 +0000 (UTC)
X-SES-Spam-Verdict: PASS
X-SES-Virus-Verdict: PASS
Received-SPF: pass (spfCheck: domain of _spf.google.com designates 209.85.167.48 as permitted sender) client-ip=209.85.167.48; envelope-from=rafael.lecaros+caf_=visa-bci=rafalecaros.com@gmail.com; helo=mail-lf1-f48.google.com;
Authentication-Results: amazonses.com;
 spf=pass (spfCheck: domain of _spf.google.com designates 209.85.167.48 as permitted sender) client-ip=209.85.167.48; envelope-from=rafael.lecaros+caf_=visa-bci=rafalecaros.com@gmail.com; helo=mail-lf1-f48.google.com;
 dkim=pass header.i=@bci.cl;
 dmarc=pass header.from=bci.cl;
X-SES-RECEIPT: AEFBQUFBQUFBQUFIS0pWOUJhNXJJZFlrMmpGQ2VCSXZSMTdKOWR4YVpPanBMdnRYeUd4TjZXSUJqS3JDQ1hVOWI3dkdiRFJlM1ViTUE0V3ltbklrVjliMlNmT3pGZUhXKzBNNHpTSDBrWjFDSkwzb2VjeU1BZ29FVW51ZGVnKzVXdVdQZ2Z2QmZ4cG5uNHRMWDBWT3lXdkltbk9tREFqclZFL3lNZ2puZkRkNTE1YXVld1BzbngxejdkeCtIM3VYWTl5Wm1jVUdseU9hcFIzL1pYa041ek5YM1hwZ1lkNkxnUmxubkRmVmhiREhQZ0VsNUZVLzRoVUNzVDhPRTZVV1VURmRycHk0a1c0NjlJaHZWRXltSGJ3aXZYRnc2ekdOWXROaTVwWm9yQTFBS3NTN2hOUm1vSlFvdWJtS01zcFk5TWg2SUlrVXJ0Q21wS1B5a0ZaYXhmTDgwcU5lNC9mY1Y=
X-SES-DKIM-SIGNATURE: a=rsa-sha256; q=dns/txt; b=dp6sep/ByL+dnDBT/JEbfNxxZSpC0lJQQHqFXk0L0udQ+9A3HIun6T3RCVezXEbip34czdhV0kGTI5uEK51TyrCdAYtl3Z0AHum8DIY2C9zJlUOQiuGAhRuLdD5PLlFv++CaBRC2n2qphheB7WUK7pVAd83H4FwTHGG6AJj4Wig=; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1586037134; v=1; bh=0fOsR4vt4WGbzUF9Ios75BfItDBDuUDYbI1PF1ScXDc=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:Content-Type:X-SES-RECEIPT;
Received: by mail-lf1-f48.google.com with SMTP id q5so8711206lfb.13
        for <visa-bci@rafalecaros.com>; Sat, 04 Apr 2020 14:52:13 -0700 (PDT)
X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;
        d=1e100.net; s=20161025;
        h=x-gm-message-state:delivered-to:dkim-signature:date:from:to
         :message-id:subject:mime-version:content-transfer-encoding;
        bh=leCFfFROqAoCwjfu7TRdME0OxQGwTdrS65fSUTDU1AI=;
        b=WHapoZyKhr/zCcEAXcPagvtFcfa5BWLMfQW+AqcPmgQoTGZW6X7Y1kCeZEgGJHhf/t
         mHZc7VmPUD1haYAkY5kySFXoA5ts9sEk+eFKnNN1M4zzBQITh9WE1k8xhLvIip454c28
         SFP6HXLeGDXU3K5cDuPLQQ9zWCupwfXK+eY7UxAU1bIohBlGWtcjAJ33eub6s8amnRCS
         7SYK1ArnYIjEiFEXyPAbVu9jO/SHatQNfvHatiZS/AIHeD3FOxfNOClMd0mlpjUwTKHW
         Ow7+vxUb1LnlCFcL/MDT8ZlFA/pb/A3+vyamPZgl3VDZ6kftUBJXM1x3iYbEXL+y1mwb
         lM3w==
X-Gm-Message-State: AGi0Pua21mVlrjCMDMKNuGonIIeqMTWxvkOKJ8BmDb6lPE/V9uVJ+GkP
	YlXYSmugj+mq6YSsqaYD06ORgVNo7SqLKcQhXQYlz2JG/jEIleU=
X-Received: by 2002:ac2:4c9a:: with SMTP id d26mr7734502lfl.112.1586037132743;
        Sat, 04 Apr 2020 14:52:12 -0700 (PDT)
X-Forwarded-To: visa-bci@rafalecaros.com
X-Forwarded-For: rafael.lecaros@gmail.com visa-bci@rafalecaros.com
Delivered-To: rafael.lecaros@gmail.com
Received: by 2002:a2e:9d84:0:0:0:0:0 with SMTP id c4csp2018878ljj;
        Sat, 4 Apr 2020 14:52:11 -0700 (PDT)
X-Google-Smtp-Source: APiQypLTzRG5wDeRhM5Qcpt6pXm9lU/Ssk8Pi7XAuSRlHfBmdhhdxBWRhVWD30kRsHqaqxt3+52i
X-Received: by 2002:ac8:3f3a:: with SMTP id c55mr14542251qtk.281.1586037131206;
        Sat, 04 Apr 2020 14:52:11 -0700 (PDT)
ARC-Seal: i=1; a=rsa-sha256; t=1586037131; cv=none;
        d=google.com; s=arc-20160816;
        b=FdSkBJbniLHeHybBZOKlczvjRv7p8ZRN70fHkU6iuhxZHHCLK15f/NTUXwhmb5XyQT
         3regywuyhySmtZ5aG/XtJovHAyaY+LV4a7VOhmcU4Md96pj6E4tH3TqIdzTrTSARU2WQ
         27FZdNut7UEwjvegvCRdfzOL65nV/wzHgc4WFku+nYo0LucmQg5z6Cr3HZb+Ryz+z2vR
         UF18MlK8uWmNpT8AtqZ21/BBqqE6c7VCZ7EKXR+o5vJRmyDnwP0XEDuaFN3YsDuIR/4F
         iL8hLXBkst11Etm+aVpX4icuEaILPpB+1iC1jVcsHSnOC7zba2nbwLg0O1TXYGemVay5
         +dRA==
ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;
        h=content-transfer-encoding:mime-version:subject:message-id:to:from
         :date:dkim-signature;
        bh=leCFfFROqAoCwjfu7TRdME0OxQGwTdrS65fSUTDU1AI=;
        b=MuGg7YmQPYxRgB75hYFkQ+NZa+gUp3ppajsnrSSrgMXsSDHiwY0ImcPdCmYDDthy02
         clfsGRF5yGqlXvXcJJCN7RFF3Uyt9cMDGsmlIBjDrXUD84aYlxnpPgQP/ls4TKSSCwPR
         VN3FoiZ1D30d71UipBZwvyC/eM1zeqCvZH7IvvEOr54BsMKZkNO0ZbfvZtj9Hh9C/nS4
         jpu3YnrqnM6zkKF2z2v3Tlb9AIfe89mlPBRjYg+feaKxAfC9fU1iNNpg3F4TI9yiQDn5
         EjHu9fxdxDYIVomhg2VOPdJ5iAg6dzLfcmsaG/xZ3HuyyONDvjuQhlCCfuMC1Dnt2G5n
         ZCSQ==
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@bci.cl header.s=mail1 header.b="HutY5C/6";
       spf=pass (google.com: domain of contacto@bci.cl designates 200.68.28.187 as permitted sender) smtp.mailfrom=contacto@bci.cl;
       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=bci.cl
Return-Path: <contacto@bci.cl>
Received: from data2.bci.cl (correo2.bci.cl. [200.68.28.187])
        by mx.google.com with ESMTPS id l13si6292849qtq.285.2020.04.04.14.52.10
        for <rafael.lecaros@gmail.com>
        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);
        Sat, 04 Apr 2020 14:52:11 -0700 (PDT)
Received-SPF: pass (google.com: domain of contacto@bci.cl designates 200.68.28.187 as permitted sender) client-ip=200.68.28.187;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@bci.cl header.s=mail1 header.b="HutY5C/6";
       spf=pass (google.com: domain of contacto@bci.cl designates 200.68.28.187 as permitted sender) smtp.mailfrom=contacto@bci.cl;
       dmarc=pass (p=REJECT sp=REJECT dis=NONE) header.from=bci.cl
DKIM-Signature: v=1; a=rsa-sha256; c=simple/simple;
  d=bci.cl; i=@bci.cl; q=dns/txt; s=mail1; t=1586037131;
  x=1617573131;
  h=from:to:message-id:subject:mime-version:
   content-transfer-encoding:date;
  bh=0fOsR4vt4WGbzUF9Ios75BfItDBDuUDYbI1PF1ScXDc=;
  b=HutY5C/6Cvp0G8Ywcaz8w2e9YYxQgS3nA3eluGbxlxClPHizIZGEuHIv
   VLGbKwMF0DMB4r2Sg/zoD+ks2vs57zj0sFDKpqAbt1AdaxxCbXsIQnZB1
   uPm/R+2Y4xht/GuHpXl+CrLdVK/znjiE1x21qd4fhN2Vc2QeT7ZTaNKi4
   cqaXvBlT0iCAutBntEcqzKEWwdOWoqOaFcWXCuCqTwcahHB4yyXEXLpLE
   I8cPybt8Hi76sXJYTFeuPwdLTIBAYAP/ROBPATyYXS35gaQT1YNuuQI40
   jdC0CEddOer0K0AxU42nAgAHq8CmCq6zf3Yiwb8eiMBcpLDNpfadRrtjL
   Q==;
Date: 04 Apr 2020 18:52:10 -0300
Received: from unknown (HELO latiniam1) ([161.131.55.173])
  by data1.bci.cl with ESMTP; 04 Apr 2020 18:52:10 -0300
From: contacto@bci.cl
To: rafael.lecaros@gmail.com
Message-ID: <417684899.3762210.1586037130548.JavaMail.weblogic@latiniam1>
Subject: Notificacion Cliente
MIME-Version: 1.0
Content-type: text/html; charset=UTF-8
Content-Transfer-Encoding: 7bit

<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  <meta http-equiv="X-UA-Compatible">
  <title>Notificaci&oacute;n tarjeta de d&eacute;bito</title>
  <link
    href="https://fonts.googleapis.com/css?family=Overpass:100,100i,200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
    rel="stylesheet">
  <style type="text/css">
    @media(max-width:767px) {
      .d-block {
        width: 100% !important;
        text-align: center !important;
        display: inline-block !important;
        line-height: 170% !important;
      }

      .w-100 {
        width: 100% !important;
      }

      .w-75 {
        width: 75% !important;
      }

      .w-50 {
        width: 50% !important;
      }

      .w-33 {
        width: 33% !important;
      }

      .w-25 {
        width: 25% !important;
      }

      .w-15 {
        width: 15% !important;
      }

      .text-center {
        text-align: center !important;
      }

      .text-left {
        text-align: left !important;
      }

      .text-right {
        text-align: right !important;
      }

      .text-justify {
        text-align: justify !important;
      }

      .f-23 {
        font-size: 23px !important;
        line-height: 27px !important;
      }

      .pb-15 {
        padding-bottom: 15px !important;
      }

      .d-none {
        display: none;
      }
    }
  </style>
</head>

<body style="padding:0; margin:0;">
  <table width="100%" border="0" align="center" cellspacing="0" cellpadding="0" bgcolor="#f6f6f6">
    <tbody>
      <tr>
        <td>
          <!-- Mail Contenedor-->
          <table class="contenedor-mail" border="0" align="center" cellpadding="0" cellspacing="0" width="600"
            bgcolor="#ffffff" style="margin: 0 auto; font-family: Overpass, sans-serif; color: #5e5e5e;">
            <tbody>
              <!-- Header Mail -->
              <tr>
                <td>
                  <img
                    src="https://bci.modyocdn.com/uploads/328f1ee5-c3f4-4e26-804a-f9e33675d66a/original/Header_informativo-99.jpg"
                    width="100%">
                    <br>
                </td>
              </tr>
              <!-- Fin Header Mail -->
              <!-- Info principal -->
              <tr>
                <td>
                  <table class="contenedor-bloque" border="0" align="center" cellpadding="0" cellspacing="0" width="80%"
                    style="text-align: center;">
                    <tbody>
                      <tr>
                        <td height="40"></td>
                      </tr>
						<tr>
						<td class="d-block" width="100%" align="center" style="text-align: left; padding: 8px 15px;">Estimado(a) Cliente:

Informamos a usted que el 04/04/2020 a las 18:52 hrs. se ha realizado una compra  en PAGO EN LINEA ENTEL PHSANTIAGO        CL con su Tarjeta de Credito terminada en 2041 por $17.989.</td>

                      </tr>
                      <tr>
                        <td height="40"></td>
                      </tr>
                      <tr>
                        <td class="parrafo f-23"
                          style="font-size: 16px; line-height: 23px; font-weight: 300; text-align: center;  ">
                          Si no reconoces este movimiento, ll&aacute;manos al <b>600 692 8000</b>.
                        </td>
                      </tr>
                      <tr>
                        <td height="20"></td>
                      </tr>
                      <tr>
                        <td class="parrafo f-23"
                          style="font-size: 14px !important; line-height: 19px !important; font-weight: 300; text-align: center;  ">
                          Si no quieres recibir notificaciones en tu correo electr&oacute;nico puedes modificar
                          tus preferencias en <b>Bci.cl</b> ingresando con tu RUT y clave, en la secci&oacute;n
                          <b> Notificaciones</b>.
                        </td>
                      </tr>
                      <tr>
                        <td height="40"></td>
                      </tr>
                    <tbody>
                  </table>
                </td>
              </tr>
              <!-- Fin Info principal -->
              <!-- Separador -->
              <tr>
                <td align="center">
                  <img style="width: 50px;"
                    src="https://bci.modyocdn.com/uploads/b9ce86dd-eb13-4a01-9da7-3b1b081d09f5/original/separador22.png">
                </td>
              </tr>

              <!-- fin Separador -->

              <!-- Footer -->
              <tr>
                <td>
                  <table class="contenedor-footer-mail f-23" border="0" align="center" cellpadding="0" cellspacing="0"
                    width="80%">
                    <tr>
                      <td height="40"></td>
                    </tr>
                    <tr>
                      <td class="bloque-iconos-footer" align="center" valign="middle" width="100%"
                        style="background: #fff; display: inline-block; line-height: 170%;">
                        <img
                          src="https://bci.modyocdn.com/uploads/dd832f14-a706-4726-9187-211614dbec60/original/Bci-logo.png"><br>

                        <b>@BancoBci</b><br>
                        <img
                          src="https://bci.modyocdn.com/uploads/93f681ff-fee7-458a-9d9c-e49ec53568fc/original/social-media.png">
                      </td>
                    </tr>
                    <tr>
                      <td height="20"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <table class="contenedor-bloque f-23" border="0" align="center" cellpadding="0" cellspacing="0"
                    width="100%" style="background-color: #f6f6f6;">
                    <tbody>
                      <tr>
                        <td height="20"
                          style="background-color: #fff; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                        </td>
                      </tr>
                      <tr>
                        <td height="20"></td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td bgcolor="#f6f6f6">
                  <table class="contenedor-mail-seguro" border="0" align="center" cellpadding="0" cellspacing="0"
                    bgcolor="#f6f6f6" width="90%">
                    <tr>
                      <td height="40"></td>
                    </tr>
                    <tr>
                      <td class="icono-logo-seguro d-block" width="30%">
                        <img
                          src="https://bci.modyocdn.com/uploads/69b62a26-5006-4ad5-b6b8-faa4aba5d38a/original/correo-seguro.png"
                          width="100%" class="w-50">
                      </td>
                      <td class="texto-seguro d-block text-left f-16" width="70%" align="left" valign="middle"
                        style="font-size: 11px; line-height: 18px;">
                        <ul>
                          <li class="pb-15">Siempre escribe la direcci&oacute;n del sitio web directamente en el
                            navegador.</li>
                          <li class="pb-15">Nunca solicitaremos tus claves, n&uacute;meros de tarjeta, BciPass o
                            Multipass, por tel&eacute;fono o correo electr&oacute;nico.</li>
                          <li class="pb-15">No debes abrir o descargar archivos de remitentes desconocidos.</li>
                          <li class="pb-15">Solo descarga Apps Bci desarrolladas por Banco Cr&eacute;dito e Inversiones.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td height="30"></td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Fin footer -->
              <!-- Legales Mail -->
              <tr>
                <td>
                  <table border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#f6f6f6" width="100%">
                    <tr>
                      <td bgcolor="f6f6f6">
                        <table class="contenedor-legales-mail" border="0" align="center" cellpadding="0" cellspacing="0"
                          width="95%">
                          <tr>
                            <td class="texto-legal-footer f-16" align="justify" valign="top"
                              style="font-size: 12px; line-height: 130%; font-weight: 300; padding-bottom: 8px;">
                              Inf&oacute;rmate sobre la garant&iacute;a estatal de los dep&oacute;sitos en tu banco o en
                              <b>www.cmfchile<span style="letter-spacing:-6px"> </span>.cl</b>. Para mayor
                              informaci&oacute;n visita <b>www.bci<span style="letter-spacing:-6px"> </span>.cl</b>.
                            </td>
                          </tr>
                        </table>
                      </td>
                    <tr>
                      <td height="30"></td>
                    </tr>
              </tr>
          </table>
        </td>
      </tr>
      <!-- Fin legales Mail -->
    </tbody>
  </table>
  <!-- fin Mail Contenedor-->
  </td>
  </tr>
  </tbody>
  </table>
</body>

</html>`;
