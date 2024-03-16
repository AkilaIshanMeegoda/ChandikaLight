const router = require("express").Router();
let Reservation = require("../models/Reservation");

router.route("/create-reservation").post(async (req, res) => {
  try {
    if (
      !req.body.clientName ||
      !req.body.clientEmail ||
      !req.body.contactNumber ||
      !req.body.eventType ||
      !req.body.eventDescription ||
      !req.body.eventDate ||
      !req.body.venueLocation ||
      !req.body.paymentAmount
    ) {
      return res.status(400).send({
        message:
          "Send all required fields: name, nic, address, gender, contactNo, email",
      });
    }
    const newReservation = {
      clientName: req.body.clientName,
      clientEmail: req.body.clientEmail,
      contactNumber: req.body.contactNumber,
      eventType: req.body.eventType,
      eventDescription: req.body.eventDescription,
      eventDate: req.body.eventDate,
      venueLocation: req.body.venueLocation,
      receipt: req.body.receipt,
      paymentAmount: req.body.paymentAmount,
    };

    const reservation = await Reservation.create(newReservation);

    return res.status(201).send(reservation);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.route("/all-reservations").get(async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.send(reservations);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.route("/update-reservation/:id").patch(async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Reservation.findByIdAndUpdate(id, req.body, { new: true });

    if (!result) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.send(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


router.route("/delete-reservation/:id").delete(async (req, res) => {
  try {
    const { id } = req.params;

    await Reservation.findByIdAndDelete(id)
      .then(() => {
        return res
          .setMaxListeners(200)
          .send({ message: "Client deleted successfully" });
      })
      .catch(() => {
        return res.status(404).json({ message: "Client not found" });
      });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});

router.route("/reservation/:id").get(async (req, res) => {
  try {
    const { id } = req.params;

    await Reservation.findById(id)
      .then((reservation) => {
        return res.status(200).json(reservation);
      })
      .catch(() => {
        return res.status(404).json({ message: "Client not found" });
      });
  } catch (err) {
    console.timeLog(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.route("/pending-reservations").get(async (req, res) => {
  try {

    await Reservation.find({ reservationStatus: 'pending' })
      .then((reservation) => {
        return res.status(200).json(reservation);
      })
      .catch(() => {
        return res.status(404).json({ message: "Client not found" });
      });
  } catch (err) {
    console.timeLog(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.route("/approved-reservations").get(async (req, res) => {
  try {

    await Reservation.find({ reservationStatus: 'approved' })
      .then((reservation) => {
        return res.status(200).json(reservation);
      })
      .catch(() => {
        return res.status(404).json({ message: "Client not found" });
      });
  } catch (err) {
    console.timeLog(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.route("/cancelled-reservations").get(async (req, res) => {
  try {

    await Reservation.find({ reservationStatus: 'cancelled' })
      .then((reservation) => {
        return res.status(200).json(reservation);
      })
      .catch(() => {
        return res.status(404).json({ message: "Client not found" });
      });
  } catch (err) {
    console.timeLog(err.message);
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
