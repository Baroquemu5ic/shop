
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY
const googleMapsBaseUrl = 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJeV5qYzMXrjsRYaGJFFD7ZiY'

const googleMapsSrc = `${googleMapsBaseUrl}&key=${GOOGLE_MAPS_API_KEY}`

export function GoogleMapsEmbed() {
    return (
        <iframe
            width="100%"
            height="100%"
            style={{"border" : '1px solid #f1f5f9' }}
            loading="lazy"
            src={googleMapsSrc}>
        </iframe>
    )
}