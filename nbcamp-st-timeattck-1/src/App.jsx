import { useState } from 'react'
import './App.css'

function App() {
  const [countries, setCountries] = useState(0)
  const [countryInput, setcountryInput] = useState(0)
  const [goldMedalsInput, setgoldMedalsInput] = useState(0)
  const [silverMedalsInput, setsilverMedalsInput] = useState(0)
  const [bronzeMedalsInput, setbronzeMedalsInput] = useState(0)

  const handleAddC = (e) => {
    e.handleAddD();

    if (cher) {
      alert("이미 등록된 국가입니다")
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldMedalsInput,
        silver: silverMedalsInput,
        bronze: bronzeMedalsInput
      };
      setCountries([...countries, newCountry]);

      
    }
  };
  console.log();
  const update = (e) => {
    e.handleAddD();

    if (cher) {
      setCountries(
        countries.map((country) => {
          if (country.name.toLowerCase() === countryInput.toLowerCase()) {
            return {
              name: country.name,
              gold: goldMedalsInput,
              silver: silverMedalsInput,
              bronze: bronzeMedalsInput
            }
          } else {
            return country;
          }
        })
      )
    } else {
      return country;
    }

  }



  return (
    <><form>
      <h1>국가 메달 리스트</h1>
      <div>
        <label>국가명</label>
        <input type="text" onChange={(e) => { setcountryInput(e.target.value) } } className=''></input>
      </div>
      <div>
        <label>금메달</label>
        <input type="number" onChange={(e) => { setgoldMedalsInput(e.target.value) } } className=''></input>
      </div>
      <div>
        <label>은메달</label>
        <input type="number" onChange={(e) => { setsilverMedalsInput(e.target.value) } } className=''></input>
      </div>
      <div>
        <label>동메달</label>
        <input type="number" onChange={(e) => { setbronzeMedalsInput(e.target.value) } } className=''></input>
      </div>
      <div>
        <button type="submit" onClick={handleAddC}>국가 추가</button>
        <button type='submit' onClick={update}>업데이트</button>
      </div>
    </form>
    <div>
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td onClick={(e) => { delete (country.name) } }>삭제</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div></>
/*새로 입력한 정보가 출력되지 않습니다. */
   )
}

export default App;
