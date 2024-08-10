const {onCall,HttpsError} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions/v2");
const admin=require('firebase-admin')
const { createEvent } = require('./googlemeet');
const functions = require('firebase-functions');
admin.initializeApp();


exports.createGoogleMeetLink =onCall(async (request) => {
    const { emails, startTime, endTime } = request.data;
  
    if (!emails || !startTime || !endTime) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Missing required parameters: emails, startTime, endTime, timeZone'
      );
    }
  
    try {
      const meetLink = await createEvent(emails, startTime, endTime);
      return { meetLink };
    } catch (error) {
      logger.error("Error creating Google Meet link:", error);
      throw new HttpsError(
   error
      );
    }
  });