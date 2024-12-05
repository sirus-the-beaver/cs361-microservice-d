exports.wineRecommendation = async (req, res) => {
    const { food } = req.body;

    if (!food) {
        return res.status(400).json({ error: "Dish or ingredient or cuisine is required" });
    }

    try {
        const response = await axios.get('https://api.spoonacular.com/food/wine/pairing',
            {
                params: {
                    food,
                    apiKey: process.env.SPOONACULAR_API_KEY
                }
            }
        );

        const { pairedWines, pairingText, productMatches } = response.data;

        if (!pairedWines || pairedWines.length === 0) {
            return res.status(404).json({ error: "No wines found" });
        }

        return res.status(200).json({ pairedWines, pairingText, productMatches });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch wine recommendations" });
    }
};