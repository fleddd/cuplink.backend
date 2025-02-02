import crypto from 'crypto'

export default function generateRandomID() : string {
    return crypto.randomBytes(3).toString('hex')
}