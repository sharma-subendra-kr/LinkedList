/** @license LinkedList

LinkedList, a JavaScript Linked List Data Structure.

Copyright © 2019-2020 Subendra Kumar Sharma. All Rights reserved. (jobs.sharma.subendra.kr@gmail.com)

This file is part of LinkedList.

LinkedList is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

LinkedList is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with LinkedList.  If not, see <https://www.gnu.org/licenses/>.

Written by Subendra Kumar Sharma.

*/

/**
		node = {
			data: {
				
			},
			next: null
		}
	*/

function LinkedList(options) {
	this.options = options;

	this.HEAD = null;

	if (Array.isArray(options?.data)) {
		this.constructList(options.data);
	}

	delete this.options?.data;
}

LinkedList.prototype.constructor = LinkedList;

LinkedList.prototype.constructNode = function (nodeData) {
	return {
		data: nodeData,
		next: null,
	};
};

LinkedList.prototype.constructList = function (data) {
	let temp;
	let node;
	for (const item of data) {
		node = constructNode(data);
		if (this.HEAD === null) {
			this.HEAD = node;
		} else {
			node.next = this.HEAD;
			this.HEAD = node;
		}
	}
};

LinkedList.prototype.insert = function (nodeData) {
	const node = constructNode(nodeData);
	if (this.HEAD === null) {
		this.HEAD = node;
	} else {
		node.next = this.HEAD;
		this.HEAD = node;
	}
};

LinkedList.prototype.find = function (node, query, dataOnly) {
	const iter = this.HEAD;
	while (iter !== null) {
		if (node === iter || query(iter)) {
			return dataOnly ? iter.data : iter;
		}
		iter = iter.next;
	}
};

LinkedList.prototype.findAll = function (query, dataOnly, stack) {
	const res = stack || [];

	const iter = this.HEAD;
	while (iter !== null) {
		if (query(iter)) {
			if (dataOnly) {
				res.push(iter.data);
			} else {
				res.push(iter);
			}
		}
		iter = iter.next;
	}

	return res;
};

LinkedList.prototype.remove = function (node, query) {
	const iter = this.HEAD;
	let prev = null;
	while (iter !== null) {
		if (iter === node || query(iter)) {
			if (prev !== null) {
				// not removing head
				prev.next = iter.next;
			} else {
				// removing head
				this.HEAD = iter.next;
			}
			iter.next = null;
			return iter;
		}
		prev = iter;
		iter = iter.next;
	}

	return null;
};

LinkedList.prototype.removeAll = function (query, dataOnly, stack) {
	const res = stack || [];

	const iter = this.HEAD;
	let prev = null;
	let temp;
	while (iter !== null) {
		if (iter === node || query(iter)) {
			if (prev !== null) {
				// not removing head
				prev.next = iter.next;
			} else {
				// removing head
				this.HEAD = iter.next;
			}
			temp = iter;
			iter = iter.next;
			temp.next = null;

			res.push(temp);

			continue;
		}
		prev = iter;
		iter = iter.next;
	}

	return res;
};

export default LinkedList;
