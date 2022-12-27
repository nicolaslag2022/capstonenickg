const { Router, response } = require("express");
const router = Router();

router.post("/", (request, repsonse) => {
  const brewPairings = new Brew(request.body);
  brewPairings.save((error, record) => {
    if (error) return response.status(500).json(error);
    return repsonse.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Brew.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Brew.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Brew.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Brew.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't
        beef: body.beef,
        chicken: body.chicken,
        pork: body.pork
      }
    },
    {
      new: true,
      upsert: true
    },
    (error, record) => {
      if (error) return response.status(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;