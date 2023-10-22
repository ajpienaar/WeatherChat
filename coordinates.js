const OPEN_CAGE_API_KEY = '';

async function getCoordinatesForLocation(location) {
    const apiKey = OPEN_CAGE_API_KEY;
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}&language=en&pretty=1`;
    
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        console.log("OpenCage API Response:", data);

        if (data.results && data.results.length > 0) {
            const firstResult = data.results[0];
            const { lat, lng: long } = firstResult.geometry;
            return { lat, long };
        } else {
            console.error('Location not found:', location);
            return null;
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
}