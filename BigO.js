// Big O Notation

// Vocabulario para estebalecer a performace de um algoritimo
// Relação do crecimento de espaço e tempo de uma algoritimo em relação a seu input


// Quando trabalhamos com Notção Big O constantes não importam por exemlo
// O(n) vira apenas O(n)



// Notção O(1) -> 
// Não tem dfirença o input que colocamos pois o numero de operções é fixo



// Notação O(log n)

// Notção O(N) -> O numero de opreção cresce proporcionalmente a N
function addUp(n){
    let total= 0

    for (let i = 0; i <= n; i++) {
       total ++
        
    }
    return total
}

// Notação O(n log n)

// Notação O(N **2 ) 
function printAllPairs(n){
    for (let i = 0; i <= n; i++) {
       for(let j = 0; j<= n; j++)
        {console.log(i,j)}
    }
    
}
// Notação O(n ** n ) 



