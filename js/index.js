var handlers={

    trainingArray: [
        { id: 1, name: "Project1", status: "Complete", description: "Angular JS training" },
        { id: 2, name: "Project2", status: "In-progress", description: "React Js training" },
        { id: 3, name: "Project3", status: "Complete", description: "Java training" },
        { id: 4, name: "Project4", status: "To-do", description: "Node Js training" },
    ],
    newtrainingArray:[

    ],

    primeNumberCheck:function(){
        num=document.getElementById('prime_number').value;
        primeFlag=false;
        for(var i=2;i<=num/2;i++){
            if(num % i == 0){
                primeFlag=true
                break
            }
        }
        if(primeFlag){
            document.getElementById("output1").innerHTML='<b>' + "Entered number is not prime"
        }else{
            document.getElementById("output1").innerHTML= '<b>' + "Entered number is prime"
        }   
    },

    displayObject:function(){
        for(var i=0;i<handlers.trainingArray.length;i++){
            var div_element=document.createElement('div');
            div_element.className="div-css";
            div_element.innerHTML='<b>'+"ID:"+'</b>'+handlers.trainingArray[i].id+'<b>'+" Name:"+'</b>'+handlers.trainingArray[i].name+'<b>'+" Status:"+'</b>'+handlers.trainingArray[i].status+'<b>'+" Description:"+'</b>'+handlers.trainingArray[i].description;
            document.getElementById("array").append(div_element);
        }
    },
    statusCheck:function(){
        var id=document.getElementById('statusId').value;
        
        for(var i=0;i<handlers.trainingArray.length;i++){
            debugger
            if(handlers.trainingArray[i].id===parseInt(id)){
                statusFlag=false
                if(handlers.trainingArray[i].status==="Complete"){
                    statusFlag=true;
                }
                document.getElementById('output2').innerHTML=statusFlag;
                break;
            }
        } 
    },

    displayNameAndDescription:function(){
        var id=document.getElementById('trainingId').value;
        for(var i=0;i<handlers.trainingArray.length;i++){
            if(handlers.trainingArray[i].id===parseInt(id)){
                var div_element=document.getElementById('output3');
                div_element.className="div-css";
                div_element.innerHTML='<b>'+" Name:"+'</b>'+handlers.trainingArray[i].name+'<b>'+" Description:"+'</b>'+handlers.trainingArray[i].description;
            }
        }
    },

    addTraining:function(){
        var id=document.getElementById('id').value;
        var name=document.getElementById('name').value;
        var status=document.getElementById('status').value;
        var description=document.getElementById('description').value;

        handlers.newtrainingArray.push({
            id:id,
            name:name,
            status:status,
            description:description
        })
        this.displayObject1();
    },

    changeStatus:function(){
        var id=document.getElementById('changestatusid').value;
        var status=document.getElementById('changestatus').value;
        for(var i=0;i<handlers.newtrainingArray.length;i++){
            if(handlers.newtrainingArray[i].id===id){
                handlers.newtrainingArray[i].status=status;
                break;
            }
        }
        this.displayObject1();
    },

    displayObject1:function(){
        document.getElementById("output5").innerHTML="";
        for(var i=0;i<handlers.newtrainingArray.length;i++){
            var div_element=document.createElement('div');
            div_element.className="div-css";
            div_element.id=handlers.newtrainingArray[i].id;
            div_element.innerHTML='<b>'+"ID:"+'</b>'+handlers.newtrainingArray[i].id+'<b>'+" Name:"+'</b>'+handlers.newtrainingArray[i].name+'<b>'+" Status:"+'</b>'+handlers.newtrainingArray[i].status+'<b>'+" Description:"+'</b>'+handlers.newtrainingArray[i].description;
            document.getElementById("output5").append(div_element);
        }
    },

    deleteObject:function(){
        var id=document.getElementById('deleteid').value;
        for(var i=0;i<handlers.newtrainingArray.length;i++){
            if(handlers.newtrainingArray[i].id===id){
                handlers.newtrainingArray.splice(i,1);
            }
        }
        this.displayObject1();
    }
}
