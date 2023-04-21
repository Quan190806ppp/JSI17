let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
//1
function getAge(age,student){
    for(var i = 0 ;i <student.length;i++){
        if(student[i].age== age){
            console.log(student[i]);
            break
        }
        else{
            console.log("not found")
        }
    }
    }
    function getAge(course,student){
        for(var i = 0 ;i <student.length;i++){
            for(var j = 0 ;i <student.[1].course.length;j++){
                if(student[1].course[j]== course){
                console.log(student[i].course);          
            }
            else 
                {console.log(student[name]);
            }
        }
    }
    
//2
localStorage.setItem("user",["minh","khoa","the anh"])
localStorage.setItem("password",["mm","kk","tt"])

for(var i = 0 ; i < localStorage.length ; i++)


