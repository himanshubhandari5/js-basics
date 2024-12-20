// Write a function called sameFrequency
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(n1, n2) {
    let str1 = ""+n1
    let str2 = ""+n2
    if(str1.length !== str2.length){
        return false
    }
    let freqObj1 = {}
    for(let i=0; i<str1.length;i++){
        freqObj1[str1[i]] = ++freqObj1[str1[i]] || 1
    }
    console.log('freqObj1: ', freqObj1)
    
    let freqObj2 = {}
    for(let i=0; i<str2.length;i++){
        freqObj2[str2[i]] = ++freqObj2[str2[i]] || 1
    }
    console.log('freqObj2: ', freqObj2)
    
    for(let i=0; i<str1.length; i++){
        const char1 = str1[i]
        const char2 = str2[i]
        
        // console.log(char1, freqObj1[char1], char2, freqObj2[char2])
        // console.log(freqObj1[char1] in freqObj2)
        console.log(freqObj1[char1], freqObj2)
        if(!(char1 in freqObj2)){
            return false
        }else if(freqObj1[char1] !== freqObj2[char1]){
            return false
        }
    }
    return true
}

// sameFrequency(3589578, 5879385) // true
// sameFrequency(1234321,5678758) // false
// sameFrequency(138214,238114) // true
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(22,222) // false