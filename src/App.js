import "./App.css";
import React, { useState } from "react";

function App() {
  const [currency, setCurrency] = useState();
  const [income, setIncome] = useState();
  const [noyrs, setNoyrs] = useState();
  const [housing, setHousing] = useState();
  const [grocery, setGrocery] = useState();
  const [utilities, setUtility] = useState();
  const [medical, setMedical] = useState();
  const [clothing, setClothing] = useState();
  const [misc, setMisc] = useState();
  const [loan, setLoan] = useState();
  const [tenure, setTenure] = useState();
  const [others, setOthers] = useState();

  let savings_array = [];
  // console.log(savings_array);

  let yearly_savings = [];

  // console.log(yearly_savings);

  let firstYear =
    income -
    housing -
    grocery -
    utilities -
    medical -
    clothing -
    misc -
    loan / tenure -
    others;

  let secondYear =
    income -
    housing * 1.03 -
    grocery -
    utilities * 1.01 -
    medical * 1.03 -
    clothing -
    misc -
    loan / tenure -
    others;

  let savingForSecondYear = secondYear;
  // console.log("second year savings : ", secondYear);

  let savingPerYr = firstYear;
  // console.log("savings per year : ", savingPerYr);

  const Savings = () => {
    if (noyrs >= 1) {
      for (var i = 0; i <= noyrs; i++) {
        if (i === 0) {
          // console.log("value starting from zero");
          savings_array.push(savingPerYr);
        }
        if (i > 0) {
          // console.log("first year savings : ", secondYear);
          secondYear = secondYear + savingForSecondYear;
          yearly_savings.push(secondYear);
        }
      }
    }
  };
  Savings();

  var current_year = new Date().getFullYear();

  let yss = [];

  if (noyrs >= 1) {
    for (var i = 1; i <= noyrs; i++) {
      yss.push(current_year + i);
    }
  }

  return (
    <div className="App">
      <header className="header p-3">
        <h2>Estimator Calculator</h2>
      </header>
      <div className="main-body container justify-content: center cl-md-12">
        <div className="row">
          <div>
            <h5>INCOME</h5>
            <hr></hr>
          </div>
          <div className="mb-3 col-md-2">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Currency
            </label>
            <select
              className="form-control"
              name="currency"
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value={"dollars"}>$ | Dollars</option>
              <option value={"rupees"}>₹ | Rupees</option>
            </select>
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Income
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Income"
              name="income"
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              No.of years of Estimation
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="No.of years"
              name="noyrs"
              onChange={(e) => setNoyrs(e.target.value)}
            />
          </div>
          <div>
            <h5>EXPENSES</h5>
            <hr></hr>
          </div>

          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Housing
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Housing Loan Amount"
              name="housing"
              onChange={(e) => setHousing(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Grocery
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Grocery Expenses"
              name="grocery"
              onChange={(e) => setGrocery(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Utilities
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Utilities Expenses"
              name="utility"
              onChange={(e) => setUtility(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Medical Insirance
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Medical Expenses"
              name="medical"
              onChange={(e) => setMedical(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Clothing
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Clothing Expenses"
              name="clothing"
              onChange={(e) => setClothing(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Miscalenious Expenses
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Miscalenious Expenses"
              name="mesc"
              onChange={(e) => setMisc(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Student Loan
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Loan amount if applicable"
              name="loan"
              onChange={(e) => setLoan(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              No.of years of loan Tenure
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Loan period if have"
              name="loan_tenure"
              onChange={(e) => setTenure(e.target.value)}
            />
          </div>
          <div className="mb-3 col-md-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Others
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter any other Expenses"
              name="others"
              onChange={(e) => setOthers(e.target.value)}
            />
          </div>
        </div>
        <div>
          <h5>Estimations</h5>
          <hr></hr>
        </div>
        <table className="table table-straped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">S.NO</th>
              <th scope="col">YEAR</th>
              <th scope="col">SAVINGS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">0</th>
              <td>{current_year}</td>
              <td>{savingPerYr}</td>
            </tr>
            {yss.map((y, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{y}</td>
                {savings_array.map((sav) => (
                  <td>{yearly_savings[index]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
