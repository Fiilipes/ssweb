import {google} from "googleapis";

const CLIENT_ID = "493448103193-pen1hu966214khqrqtqi66so50vpgncp.apps.googleusercontent.com"
const CLIENT_SECRET = "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"

const REDIRECT_URI = "https://developers.google.com/oauthplayground"

const REFRESH_TOKEN = "1//04PYv3kMo72xdCgYIARAAGAQSNwF-L9Ir52rPom_GOoNb0SXQ_I1tr1C31QY5SqshUDqBtspiIqXpHkDnQFPtxnpLTxmpDZwY08g"

const oauth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
)

oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})

const drive = google.drive({
    version: "v3",
    auth: oauth2Client
})
const readFileFromDirectory = async () => {
    try {
        const response = await drive.files.list({
            q: "'1b6CYRaByQX7UYr8mrJ3ak3IpjMT-04hE' in parents"
        })

        return response.data.files

    } catch (error) {
        console.log(error)
    }
}

readFileFromDirectory().then((files) => {
    console.log(files)
})

