/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for(let i = 0; i<word.length; i++){
        node = node[word.charAt(i)] = node[word.charAt(i)] || {}
        if(i == word.length - 1) node.isEnd = true
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for(let i = 0; i < word.length; i++){
        if(!node[word.charAt(i)]) return false
        node = node[word.charAt(i)]
        if(node.isEnd == true && i == word.length - 1) return true
    }
    return false
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    for(let i = 0; i < prefix.length; i++){
        if(!node[prefix.charAt(i)]) return false
        node = node[prefix.charAt(i)]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */