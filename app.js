let pronoun = ['the', 'your'];
let adj = ['white', 'bright'];
let noun = ['moon', 'star'];
let ext = ['com', 'on', 'ar'];

for (let p = 0; p < pronoun.length; p++) { 
    for (let a = 0; a < adj.length; a++) { 
        for (let n = 0; n < noun.length; n++) { 
            for (let e = 0; e < ext.length; e++) { 

                let res = noun[n].substring(noun[n].length - ext[e].length);
                let nounModified = noun[n].substring(0, noun[n].length - ext[n].length);
                let domainName = `${pronoun[p]}${adj[a]}${noun[n]}.${ext[e]}`;
                if (res == ext[e]) {
                    console.log(pronoun[p] + adj[a] + nounModified + "." + ext[e]);
                } else {
                    console.log(domainName);
                }

            }
        }

    }
}