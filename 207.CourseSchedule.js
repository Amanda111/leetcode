/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
let graph
let visited
let visiting

var canFinish = function(numCourses, prerequisites) {
    graph = new Map();
    visited = new Set();
    visiting = new Set();
     for(let [pre,course] of prerequisites){
        if(graph.has(pre)){
            let courses = graph.get(pre)
            courses.push(course)
            graph.set(pre,courses)
        }else{
            graph.set(pre,[course])
        }
     }
    for (let [key,value] of graph) {        
        if(!dfs(key)) return false
    }
    return true
};

function dfs(key){
    visiting.add(key)
    let courses = graph.get(key)
    if(courses){
        for (let value of courses){
            if(visited.has(value)) continue
            if(visiting.has(value)) return false
            if(!dfs(value)) return false
        }
    }
    visited.add(key)
    visiting.delete(key)
    return true
}
