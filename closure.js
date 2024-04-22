function calculator(){
    let result = 0

    

    function subtract(num){
        result -= num
        return result
    }

    function total(){
        return result
    }

    function reset(){
        result = 0
    }
    return {
        add: function add(num){
            result += num
            return result
        },
        subtract: subtract,
        total: total,
        reset: reset
    }
}

let a = calculator()
a.add(62)
a.subtract(32)
a.reset()

console.log(a.total())