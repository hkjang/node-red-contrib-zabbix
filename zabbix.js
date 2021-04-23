const Zabbix = require('zabbix-promise')
module.exports = function(RED) {
    "use strict";
    function zabbixOut(n) {
        RED.nodes.createNode(this,n);
        if (RED.nodes.getNode(n.creds)){
            this.user = RED.nodes.getNode(n.creds).credentials.user;
            this.passwd = RED.nodes.getNode(n.creds).credentials.passwd;
            this.zabbixAPIURL = RED.nodes.getNode(n.creds).credentials.zabbixAPIURL;
        } else {
            this.user = "";
            this.passwd = "";
            this.zabbixAPIURL = "";
        }

        var node = this;
        for (var key in n) {
            if (key !== 'x' && key !== 'y' && key !== 'z' && key !== 'creds' && key !== 'id'&& key !== 'type' && key !== 'wires' && key !== 'name'
                && n[key] !== ''&& typeof n[key] !== 'undefined') {
                node[key] = n[key] || "";
            }
        }
        this.on('input', function (msg){
            for (var i in msg) {
                if (i !== 'req' && i !== 'res' && i !== 'payload' && i !== 'send' && i !== '_msgid' && i !== 'topic') {
                    node[i] = node[i] || msg[i];
                }
            }
            const zabbix = new Zabbix({
                url: node.zabbixAPIURL,
                user: node.user,
                password: node.passwd
            });
            const main = async () => {
                try {
                    await zabbix.login();
                    const result = await zabbix.request(node.api, msg.payload);
                    // msg.payload = JSON.stringify(result, null, 2);
                    msg.payload = result;
                    zabbix.logout();
                    node.send(msg);
                }catch (err){
                    node.error(err);
                    msg.payload = err;
                    node.send(msg);
                }
            }
            main()
        })
    }
    RED.nodes.registerType("zabbix", zabbixOut, {
        credentials: {
            zabbixAPIURL: {type: "text"},
            user: {type: "text"},
            passwd: {type: "passwd"}
        }
    });

    function zabbixNode(n){
        RED.nodes.createNode(this, n);
        this.zabbixAPIURL = n.zabbixAPIURL;
        this.user = n.user;
        this.passwd = n.passwd;
    }

    RED.nodes.registerType("zabbixNode", zabbixNode, {
        credentials: {
            zabbixAPIURL: {type: "text"},
            user: {type: "text"},
            passwd: {type: "passwd"}
        }
    });
};
