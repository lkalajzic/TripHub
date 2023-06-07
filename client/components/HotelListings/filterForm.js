const filterForm = async (
    locationI = '',
    checkin ,
    checkout,
    nameI = '',
    priceMinI = 0,
    priceMaxI = Infinity,
    currencyI = '',
    minRatingI = 0
    ) => {
        try {
            const response = fetch('http://localhost:8000/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    location: locationI,
                    name: nameI,
                    priceMin: priceMinI,
                    priceMax: priceMaxI,
                    currency: currencyI,
                    minRating: minRatingI
                })
            })
            .then(response => response.json())
            .then(data => {
                //handle response data
                const filteredHotels = data.result;
                console.log(filteredHotels);
            })
        } catch (error) {
            alert(error);
        }
    };

export default filterForm;