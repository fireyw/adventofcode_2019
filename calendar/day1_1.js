//https://adventofcode.com/2019/day/1
//https://adventofcode.com/2019/day/1#part2
const arrays= ['147308'
    ,'51605'
    ,'71317'
    ,'110882'
    ,'92545'
    ,'126856'
    ,'104937'
    ,'92433'
    ,'107850'
    ,'119538'
    ,'82733'
    ,'52216'
    ,'105704'
    ,'123682'
    ,'105919'
    ,'136265'
    ,'100540'
    ,'84245'
    ,'72006'
    ,'111652'
    ,'85116'
    ,'85841'
    ,'71374'
    ,'144196'
    ,'125493'
    ,'113529'
    ,'64637'
    ,'87489'
    ,'138161'
    ,'120897'
    ,'53384'
    ,'83310'
    ,'126144'
    ,'120672'
    ,'107681'
    ,'101369'
    ,'77469'
    ,'141056'
    ,'140426'
    ,'114920'
    ,'124454'
    ,'130867'
    ,'64611'
    ,'104813'
    ,'138808'
    ,'114234'
    ,'148654'
    ,'59031'
    ,'91367'
    ,'83316'
    ,'106192'
    ,'127495'
    ,'139980'
    ,'119024'
    ,'149567'
    ,'57007'
    ,'61075'
    ,'65637'
    ,'75293'
    ,'61670'
    ,'104044'
    ,'77230'
    ,'80201'
    ,'137094'
    ,'99733'
    ,'50801'
    ,'68922'
    ,'148404'
    ,'79980'
    ,'62716'
    ,'67666'
    ,'72694'
    ,'81951'
    ,'108427'
    ,'111721'
    ,'55532'
    ,'94442'
    ,'88562'
    ,'101088'
    ,'111656'
    ,'111649'
    ,'92085'
    ,'91730'
    ,'114744'
    ,'59355'
    ,'55842'
    ,'100926'
    ,'146370'
    ,'147829'
    ,'62160'
    ,'91447'
    ,'115745'
    ,'141815'
    ,'106837'
    ,'68151'
    ,'89077'
    ,'60357'
    ,'89856'
    ,'75040'
    ,'139131'];

function day1(arrays){
    let sum=0;
    arrays.map((arr,index)=>{
        let result=Math.floor(arr/3)-2
        console.log(result);
    sum+=result;
    return result;
})
    console.log(sum)
}
day1(arrays);