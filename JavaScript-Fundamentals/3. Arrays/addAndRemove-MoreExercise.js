function addOrRemove(command) {
    let add = 0;
    let result = [];
    let print = '';
        for ( let i = 0; i <= command.length - 1; i++) {
            
            if (command[i] == "add") {
                add++;
                result.push(add);
            } else if (command[i] == "remove" ) {
                add++;
                result.pop(result[i]);
            } 
    
        }
    
            for ( let i = 0; i <= result.length -1; i++) {
                print += result[i] + ' ';
        
            }
    
        if ( result.length == 0) {
            console.log("Empty");
        } else {
            console.log(print);      
        }
    
    }

    addOrRemove(['add', 'add', 'remove', 'add', 'add']);