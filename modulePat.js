let counter = (function (){
    let count = 0
    return {
        add: function(){
            return count++
        }
    }
})()

console.log(counter.add())
console.log(counter.add())