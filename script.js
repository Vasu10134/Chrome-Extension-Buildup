const FACT_URL = "https://api.api-ninjas.com/v1/facts";
const API_KEY = "mPh5XV20FpF6S8Y+JjIUwg==H32DTDkUKNcHPhuX";

async function loadFact() {
  try {
    const res = await fetch(FACT_URL, {
      headers: {
        "X-Api-Key": API_KEY
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    document.getElementById("fact").innerText = data[0].fact;
  } catch (err) {
    console.error(err);
    document.getElementById("fact").innerText = "Error loading fact.";
  }
}

loadFact();
