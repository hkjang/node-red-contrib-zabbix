node-red-contrib-zabbix
========================

A <a href="http://nodered.org" target="_new">Node-RED</a> 
node to get response to  <a href="https://github.com/sumitgoelpw/zabbix-promise" target="_new"> zabbix api </a>.

Install
-------

Run the following command in the root directory of your Node-RED install:

    npm install node-red-contrib-zabbix

Usage
-----

## zabbix API 
<i><a href="https://github.com/sumitgoelpw/zabbix-promise" target="_new">zabbix</a></i> api request node.

Expects <b>msg.payload</b> with request params.

### API URL
- The url to request Zabbix API.
- ex) http://$ZABBIX_SERER_URL/api_jsonrpc.php

### API
- zabbix jsonrpc API
- ref this url : https://www.zabbix.com/documentation/current/manual/api

## parameter example
```javascript
msg.api = 'host.get';
// msg.api = 'dhost.get';
msg.payload = {}
msg.payload.selectInterfaces = 'extend';
msg.payload.limit = 1;
```

## sample flow

```json
[{"id":"df103346.dbba5","type":"inject","z":"52583d9f.0ddc34","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":300,"y":60,"wires":[["551cb18.605b05"]]},{"id":"51f3695b.de0cc8","type":"debug","z":"52583d9f.0ddc34","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":810,"y":60,"wires":[]},{"id":"551cb18.605b05","type":"function","z":"52583d9f.0ddc34","name":"","func":"msg.payload = {}\nmsg.api = 'host.get'\nmsg.api = 'dhost.get'\nmsg.payload.selectInterfaces = 'extend'\nmsg.payload.limit = 100;\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":460,"y":60,"wires":[["b1cb354f.0e4008"]]},{"id":"b1cb354f.0e4008","type":"zabbix","z":"52583d9f.0ddc34","name":"","api":"","creds":"640f4a2b.a018f4","x":630,"y":60,"wires":[["51f3695b.de0cc8"]]},{"id":"640f4a2b.a018f4","type":"zabbixNode","name":"zabbix server info"}]
```

## sample response 
```json
[{"hostid":"10383","proxy_hostid":"0","host":"ip-10-0-2-209-master","status":"0","disable_until":"0","error":"","available":"1","errors_from":"0","lastaccess":"0","ipmi_authtype":"-1","ipmi_privilege":"2","ipmi_username":"","ipmi_password":"","ipmi_disable_until":"0","ipmi_available":"0","snmp_disable_until":"0","snmp_available":"0","maintenanceid":"0","maintenance_status":"0","maintenance_type":"0","maintenance_from":"0","ipmi_errors_from":"0","snmp_errors_from":"0","ipmi_error":"","snmp_error":"","jmx_disable_until":"0","jmx_available":"0","jmx_errors_from":"0","jmx_error":"","name":"ip-10-0-2-209-master","flags":"0","templateid":"0","description":"","tls_connect":"1","tls_accept":"1","tls_issuer":"","tls_subject":"","tls_psk_identity":"","tls_psk":"","proxy_address":"","auto_compress":"1","discover":"0","custom_interfaces":"0","inventory_mode":"-1","interfaces":[{"interfaceid":"8","hostid":"10383","main":"1","type":"1","useip":"1","ip":"54.151.144.114","dns":"","port":"10050","details":[]}]}]
```
