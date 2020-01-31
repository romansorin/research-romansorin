import { Database } from "Firebase"

const PATH = "participants"
const DB = Database.collection(PATH)

export class Participant {
  constructor (doc) {
    this.email = doc.email
    this.consent = doc.consent
    this.start_timestamp = doc.start_timestamp
    this.end_timestamp = doc.end_timestamp
    this.ip_address = doc.ip_address
  }
}

export const addParticipant = data => {
  DB.add(data)
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch(function (error) {
      console.error("Error adding document: ", error)
    })
}
