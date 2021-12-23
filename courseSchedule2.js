/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    const adjList = [];
    for (let prereq of prerequisites) {
        const a = prereq[0];
        const b = prereq[1];
        if (!adjList[b]) adjList[b] = [];
        adjList[b].push(a);
    }
    const s = [];
    const v = [];
    const c = [];
    for (let i = 0; i < numCourses; i++) {
        v[i] = c[i] = false;
    }
    const isCyclic = (i) => {
        if (c[i]) return false;
        if (v[i]) return true;
        const neighbors = adjList[i] || [];
        v[i] = true;
        for (let neighbor of neighbors) {
            let ret = isCyclic(neighbor);
            if (ret) return true;
        }
        v[i] = false;
        s.push(i);
        c[i] = true;
        return false;
    };
    for (let i = 0; i < numCourses; i++) {
        let ret = isCyclic(i);
        if (ret) return [];
    }
    return s.reverse();
};