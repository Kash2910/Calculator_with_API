const handler = (req, res) => {
  const { x, y, op } = req.body;
  const { method } = req;
  const operations = ["+", "-", "*", "/"]
  switch (method) {
    case "POST":
      if (typeof x === "number" && typeof y === "number" ) {
        let ans = 0;
        if (op === "+") {
          ans = Number(x) + Number(y);
          return res.status(200).json({ answer: ans });
        } else if (op === "-") {
          ans = Number(x) - Number(y);
          return res.status(200).json({ answer: ans });
        } else if (op === "*") {
          ans = Number(x) * Number(y);
          return res.status(200).json({ answer: ans });
        } else if (op === "/") {
          ans = Number(x) / Number(y);
          return res.status(200).json({ answer: ans });
        } else {
          return res.status(200).json({ response: "Invalid operation" });
        }
      } else {
        return res.status(200).json({ response: "Kindly Enter a Valid Number!."})
      }
  }
};

export default handler;
