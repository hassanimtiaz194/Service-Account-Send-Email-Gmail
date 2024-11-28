# pip install --upgrade google-auth google-api-python-client google-auth-httplib2 google-auth-oauthlib

from google.oauth2 import service_account
from googleapiclient.discovery import build
from email.mime.text import MIMEText
import base64

# Service account configuration
SERVICE_ACCOUNT_FILE = 'service.json'
credentials = service_account.Credentials.from_service_account_file(
    filename=SERVICE_ACCOUNT_FILE,
    scopes=['https://mail.google.com/'],  # https://www.googleapis.com/auth/gmail.send || https://mail.google.com/
    subject=''  # Replace with the user you want to impersonate
)

# Build the Gmail service
service_gmail = build('gmail', 'v1', credentials=credentials)

# Function to create a MIME email message
def create_message(sender, to, subject, body):
    message = MIMEText(body)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject
    raw_message = base64.urlsafe_b64encode(message.as_bytes()).decode('utf-8')
    return {'raw': raw_message}

# Email details
sender_email = ""  # Replace with your email address
recipient_email = ""  # Replace with the recipient's email address
email_subject = "Test Email from Gmail API"
email_body = "Hello, this is a test email sent using the Gmail API!"

# Create and send the email
message = create_message(sender_email, recipient_email, email_subject, email_body)
try:
    sent_message = service_gmail.users().messages().send(userId="me", body=message).execute()
    print(f"Message sent! Message ID: {sent_message['id']}")
except Exception as e:
    print(f"An error occurred: {e}")

