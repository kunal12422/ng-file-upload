export class Util {
    public static translateScalars(str) {
        if (typeof str === 'string') {
            if (str.search(/kb/i) === str.length - 2) {
                return parseFloat(str.substring(0, str.length - 2)) * 1024;
            } else if (str.search(/mb/i) === str.length - 2) {
                return parseFloat(str.substring(0, str.length - 2)) * 1048576;
            } else if (str.search(/gb/i) === str.length - 2) {
                return parseFloat(str.substring(0, str.length - 2)) * 1073741824;
            } else if (str.search(/b/i) === str.length - 1) {
                return parseFloat(str.substring(0, str.length - 1));
            } else if (str.search(/s/i) === str.length - 1) {
                return parseFloat(str.substring(0, str.length - 1));
            } else if (str.search(/m/i) === str.length - 1) {
                return parseFloat(str.substring(0, str.length - 1)) * 60;
            } else if (str.search(/h/i) === str.length - 1) {
                return parseFloat(str.substring(0, str.length - 1)) * 3600;
            }
        }
        return str;
    }

    public static emptyPromise(...args: any[]) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve.apply(this, args);
            }, 0);
        });
    };

    public static rejectPromise(...args: any[]) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject.apply(this, args);
            }, 0);
        });
    };

    public static happyPromise(promise, data) {
        return new Promise((resolve) => {
            promise.then((res) => {
                resolve(res)
            }).catch((e) => {
                setTimeout(()=> {
                    throw e
                }, 0);
                resolve(data);
            })
        });
    };
}