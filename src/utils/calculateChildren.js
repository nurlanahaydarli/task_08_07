export function countChildrenLengthZero(data) {
    let count = 0;

    function traverse(node) {
        if (node.children && node.children.length === 0) {
            count++;
        }
        if (node.children) {
            for (let child of node.children) {
                traverse(child);
            }
        }
    }

    for (let item of data) {
        traverse(item);
    }

    return count;
}