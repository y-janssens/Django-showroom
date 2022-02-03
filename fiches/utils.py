from django.conf import settings
import smtplib
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def _get_smtp_context():
    s = smtplib.SMTP(host=settings.SMTP_HOST, port=settings.SMTP_PORT)
    s.starttls()
    s.login(settings.SMTP_LOGIN, settings.SMTP_PASSWORD)
    return s


def send_email_plaintext(
    message: str,
    from_header: str = "y-janssens@dontswipe.io",
    to: str = "y-janssens@dontswipe.io",
    subject: str = "Email from Don't Swipe",
    attachments=None,
):
    s = _get_smtp_context()
    msg = MIMEMultipart()
    msg["From"] = from_header
    msg["To"] = to
    msg["Subject"] = subject

    if attachments is not None:
        for filename, content in attachments:
            part = MIMEApplication(content, Name=filename)
            part["Content-Disposition"] = f'attachment; filename="{filename}"'
        msg.attach(part)

    msg.attach(MIMEText(message, "plain"))
    s.send_message(msg)