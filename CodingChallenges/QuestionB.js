/*
Question B -- Web Crawler: I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages.
I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, "visited", where I'm storing URLs
I've already visited. Now the crawler only visits a URL if it hasn't already been visited. Let’s see if we can make this crawler use less memory.
See if you can come up with a data structure better than a hash that just stores the entire URL. How can we trim down the amount of space taken
up by "visited"? Explain in words and implement your solution.


Response:
  I would create a new trie of visited urls. The trie would consist of nodes with keys set to individual characters of a url, and a value to another node. The last node will have a property 'this.end' set to true. The trie would have a function to check whether a given url exists and a function to add url to the trie. The webcrawler function could the utilize these functions to check if the url exists, and if it does, move onto the next url. If the url does NOT exist, however, it can add the url to the trie, and then proceed to do what it needs.
*/

 
const Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	};
	this.isEnd = function() {
		return this.end;
	};
};

const Trie = function() {

	this.root = new Node();

	this.addUrl = function(url, node = this.root) {
	  
	  //break case that ensures last node has this.end set to true
		if (url.length === 0) {
			node.setEnd();
			return;
			
		//if node does not contain first letter of url (or sliced url), set letter as new key and new Node as value
		} else if (!node.keys.has(url[0])) {
			node.keys.set(url[0], new Node());
			return this.addUrl(url.slice(1), node.keys.get(url[0]));
			
		//continue down trie as letter already exists
		} else {
			return this.addUrl(url.slice(1), node.keys.get(url[0]));
		};
	};

	this.containsUrl = function(url) {
		let currNode = this.root;
		while (url.length > 1) {
			if (!currNode.keys.has(url[0])) {
				return false;
				
			//reassigns currNode to next node and moves to next letter of url
			} else {
				currNode = currNode.keys.get(url[0]);
				url = url.slice(1);
			};
		};
		//if last character in url matches the key in node with this.end is true, return true
		if(currNode.keys.has(url) && currNode.keys.get(url).isEnd()) {
		  return true;
		} else {
		  return false;
		}
	};
};

const visitedUrlTrie = new Trie()

visitedUrlTrie.addUrl('https://www.google.com'); 
visitedUrlTrie.addUrl('https://www.github.com'); 
visitedUrlTrie.addUrl('http://www.reddit.com'); 
visitedUrlTrie.addUrl('www.godaddy.com'); 

console.log(visitedUrlTrie.containsUrl('https://www.google.com')) // true
console.log(visitedUrlTrie.containsUrl('www.godady.com')) //false
console.log(visitedUrlTrie.containsUrl('https://www.google.coms')) //false