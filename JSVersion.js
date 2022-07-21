// this is the function that would allow user input it however doesnt work. it prints things again and skips everything betweeen test1 and test4

const { finished } = require('stream');


//  function question_function(){
//     readline = require("readline");
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });
//       answer1="0"
//   // console.log("Put in your number choice. ")
//     console.log("test1")
//     q1 = rl.question( (answer) => {
//     console.log("test2")
//     console.log("thankyou for your choice of", (answer)),
//     console.log("test3")
//     process.exit();
//   });
//     console.log("test4")
//     test_idea= q1
//     console.log("test5", q1)
//     return ( q1 )
// }

function taskFunction(){
    const taskList = [[1,10,0],[2,50,2],[3,25,0],[4,69,1]];

//saved jason file it saves the list insted of pickle 

const fs = require('fs')

const saveData = (taskList) =>{
    const finished = (error) =>{
        if(error){
            console.error(error)
            return;
        }
    }

    const jsonData = JSON.stringify(taskList)
    fs.writeFile('taskList.json',jsonData,finished)
}

saveData(taskList)


console.log(taskList);
    //once imput is working need a line bellow
    //const task = question_function()("Please select a task. ");

    // temporay input 
    task="1"
    // if need translate to js.  task = int(task)
    console.log("Selected" ,taskList[task-1][0]);
   
    if (taskList[task-1][2] == 0){
        taskStatus = 'open';
    }
    if (taskList[task-1][2] == 1){
        taskStatus == "In progress";
    }
    if (taskList[task-1][2] == 2){
        taskStatus == "Closed"   
    }

    console.log("---------------------");
    console.log(" Task selected:",taskList[task-1][0],"\n","Reward:",taskList[task-1][1],"\n","taskStatus:",taskStatus);
    console.log("---------------------","\n");

    if (taskStatus == "In Progress"){
        //once imput is working use location bellow 
        //const taskPermission = question_function()("Do you want to vote for completion of this task? [y/n] ")

        // temproray imput varble 
        taskPermission="y"
        if (taskPermission == "y"){
            listLength = item_list_counter(taskList)
            callVoting = voting(listLength, token_wallet)
            if (callVoting == "pass"){
                taskList[task-1][2] = '2'
                console.log(taskList);
            }
        }
    }
}

function voting (number_of_task, token_wallet_voting){
    postive_vote=0
    negitve_vote=0
    vote_test1="fail"

    if (token_wallet_voting<=0){
        console.log("You can't vote.")
        return
    }
    if (token_wallet_voting>=1){
        while (vote_test1 =="fail"){
            // this is the line that should have allowed user voteing but user input doesnt work
            //const vote_choice = question_function() ("Do you wish for this action to pass [y/n] ")

            vote_choice = "y"//here is the line to replace the user input it simply is a varble that can be dealted 
            if (vote_choice == "y" || vote_choice == "n"){
                vote_test1 == "pass"
            }
            else {
                print("Please input y or n")
            }
        if (vote_choice == "y"){
            postive_vote = postive_vote + token_wallet_voting
        }
        else{
            negitve_vote = negitve_vote + token_wallet_voting
        }
        if (postive_vote>negitve_vote){
            vote_status = "pass"
        }
        else {
            vote_status = "fail"
        }
        return (vote_status)
        }
    }
}

function item_list_counter(list_ilc){
    list_count=list(list_ilc)
    for ( let i in range(0, len(list_count))){
        if (i == (len(list_count)-1)){
            last_number=i+1
            return(last_number)
        }
    }
}

function create_proposal(){
 proposal_list=[[1,4,5],[5,7,9]]   
//other list to create preposals 

const fs = require('fs')

const saveData = (proposal_list) =>{
    const finished = (error) =>{
        if(error){
            console.error(error)
            return;
        }
    }

    const jsonData = JSON.stringify(proposal_list)
    fs.writeFile('proposalList.json', jsonData, finished)
}

saveData(proposal_list)


//add a user imput so they can add but otherwiese works 

    console.log(proposal_list)
    return
}

token_wallet = 10000000000000000


console.log("Please select a number 1) View tasks and vote 2) Make a Proposal " )

//this is the selection area where you can chose to vew task and vote or make a preposal 
//selection = question_function()

//this can be removed once the input is worked out
selection = 2
if (selection == "1"){
    call_taskFunction = taskFunction()
}
if (selection == "2"){
    call_create_proposal = create_proposal()
}

