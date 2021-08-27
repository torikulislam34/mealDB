const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals));
}
const displaySearchResult = meals => {
    // console.log(meals);
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        console.log(meal);
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-danger">${meal.strMeal}</h5>
                <p class="card-text text-secondary">${meal.strInstructions.slice(0,150)}</p>
            </div>
        </div>
    `;
    searchResult.appendChild(div);
  });

}
/*
const data={ result: [ {userName: {title:'Mr.',name:"sakib khan"} } ] }
// console.log(data.result[0].userName.name);
const p=[1,2,3]; const q=p.filter(  n=> Math.pow(n, 3));
console.log(q);*/