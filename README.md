# Cloud Function for Email Verification with Pub/Sub Trigger

## Overview
This assignment entails developing a cloud function designed to send verification emails to newly registered users. This function is triggered by messages published to a specific Pub/Sub topic.

### Functionality
- **User Entry Creation:** The serverless function automatically records a new entry in the `userverifications` table.
- **Token Generation:** It generates a unique token which is sent via email to verify the user's identity.
- **Email Integration:** Utilizes the Mailgun API to facilitate the email sending process, ensuring that verification emails are delivered efficiently.

### Benefits
- **Automated Verification:** Automates the process of sending verification emails, enhancing the onboarding experience for new users.
- **Improved User Experience:** Streamlines the user verification process, contributing to a smoother user journey.
- **Increased System Reliability:** By automating email verification, the system becomes more robust and less prone to manual errors.

## Technologies Used
- **Google Cloud Pub/Sub:** Manages real-time message queueing and delivery.
- **Google Cloud Functions:** Executes the serverless function upon receiving messages from Pub/Sub.
- **Mailgun API:** Manages the sending of emails through a reliable cloud-based email service.

## Setup and Deployment
1. **Configure Google Cloud Pub/Sub:**
   - Create a topic named `new-user-registrations`.
   - Subscribe the Cloud Function to this topic.

2. **Deploy the Cloud Function:**
   - Ensure the function has permissions to access the Pub/Sub topic and send emails via Mailgun.
   - Use the following environment variables:
     - `MAILGUN_API_KEY`: Your Mailgun API key.
     - `MAILGUN_DOMAIN`: Your Mailgun domain.

3. **Mailgun Configuration:**
   - Set up a Mailgun account and verify your domain.
   - Configure DNS settings according to Mailgun’s requirements to ensure email deliverability.

## Conclusion
This solution leverages serverless technology and cloud-native messaging services to improve the efficiency and reliability of the user onboarding process through automated email verifications.
