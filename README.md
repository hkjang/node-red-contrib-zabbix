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

msg.api = 'action.create'
msg.api = 'action.delete'
msg.api = 'action.get'
msg.api = 'action.update'
msg.api = 'alert.get'
msg.api = 'application.create'
msg.api = 'application.delete'
msg.api = 'application.get'
msg.api = 'application.massadd'
msg.api = 'application.update'
msg.api = 'auditlog.get'
msg.api = 'authentication.get'
msg.api = 'authentication.update'
msg.api = 'autoregistration.get'
msg.api = 'autoregistration.update'
msg.api = 'configuration.export'
msg.api = 'configuration.import'
msg.api = 'correlation.create'
msg.api = 'correlation.delete'
msg.api = 'correlation.get'
msg.api = 'correlation.update'
msg.api = 'dashboard.create'
msg.api = 'dashboard.delete'
msg.api = 'dashboard.get'
msg.api = 'dashboard.update'
msg.api = 'dcheck.get'
msg.api = 'dhost.get'
msg.api = 'discoveryrule.copy'
msg.api = 'discoveryrule.create'
msg.api = 'discoveryrule.delete'
msg.api = 'discoveryrule.get'
msg.api = 'discoveryrule.update'
msg.api = 'drule.create'
msg.api = 'drule.delete'
msg.api = 'drule.get'
msg.api = 'drule.update'
msg.api = 'dservice.get'
msg.api = 'event.acknowledge'
msg.api = 'event.get'
msg.api = 'graph.create'
msg.api = 'graph.delete'
msg.api = 'graph.get'
msg.api = 'graph.update'
msg.api = 'graphitem.get'
msg.api = 'graphprototype.create'
msg.api = 'graphprototype.delete'
msg.api = 'graphprototype.get'
msg.api = 'graphprototype.update'
msg.api = 'history.get'
msg.api = 'host.create'
msg.api = 'host.delete'
msg.api = 'host.get'
msg.api = 'host.massadd'
msg.api = 'host.massremove'
msg.api = 'host.massupdate'
msg.api = 'host.update'
msg.api = 'hostgroup.create'
msg.api = 'hostgroup.delete'
msg.api = 'hostgroup.get'
msg.api = 'hostgroup.massadd'
msg.api = 'hostgroup.massremove'
msg.api = 'hostgroup.massupdate'
msg.api = 'hostgroup.update'
msg.api = 'hostinterface.create'
msg.api = 'hostinterface.delete'
msg.api = 'hostinterface.get'
msg.api = 'hostinterface.massadd'
msg.api = 'hostinterface.massremove'
msg.api = 'hostinterface.replacehostinterfaces'
msg.api = 'hostinterface.update'
msg.api = 'hostprototype.create'
msg.api = 'hostprototype.delete'
msg.api = 'hostprototype.get'
msg.api = 'hostprototype.update'
msg.api = 'housekeeping.get'
msg.api = 'housekeeping.update'
msg.api = 'httptest.create'
msg.api = 'httptest.delete'
msg.api = 'httptest.get'
msg.api = 'httptest.update'
msg.api = 'iconmap.create'
msg.api = 'iconmap.delete'
msg.api = 'iconmap.get'
msg.api = 'iconmap.update'
msg.api = 'image.create'
msg.api = 'image.delete'
msg.api = 'image.get'
msg.api = 'image.update'
msg.api = 'item.create'
msg.api = 'item.delete'
msg.api = 'item.get'
msg.api = 'item.update'
msg.api = 'itemprototype.create'
msg.api = 'itemprototype.delete'
msg.api = 'itemprototype.get'
msg.api = 'itemprototype.update'
msg.api = 'maintenance.create'
msg.api = 'maintenance.delete'
msg.api = 'maintenance.get'
msg.api = 'maintenance.update'
msg.api = 'map.create'
msg.api = 'map.delete'
msg.api = 'map.get'
msg.api = 'map.update'
msg.api = 'mediatype.create'
msg.api = 'mediatype.delete'
msg.api = 'mediatype.get'
msg.api = 'mediatype.update'
msg.api = 'module.create'
msg.api = 'module.delete'
msg.api = 'module.get'
msg.api = 'module.update'
msg.api = 'problem.get'
msg.api = 'proxy.create'
msg.api = 'proxy.delete'
msg.api = 'proxy.get'
msg.api = 'proxy.update'
msg.api = 'role.create'
msg.api = 'role.delete'
msg.api = 'role.get'
msg.api = 'role.update'
msg.api = 'screen.create'
msg.api = 'screen.delete'
msg.api = 'screen.get'
msg.api = 'screen.update'
msg.api = 'screenitem.create'
msg.api = 'screenitem.delete'
msg.api = 'screenitem.get'
msg.api = 'screenitem.update'
msg.api = 'script.create'
msg.api = 'script.delete'
msg.api = 'script.execute'
msg.api = 'script.get'
msg.api = 'script.getscriptsbyhosts'
msg.api = 'script.update'
msg.api = 'service.adddependencies'
msg.api = 'service.addtimes'
msg.api = 'service.create'
msg.api = 'service.delete'
msg.api = 'service.deletedependencies'
msg.api = 'service.deletetimes'
msg.api = 'service.get'
msg.api = 'service.getsla'
msg.api = 'service.update'
msg.api = 'settings.get'
msg.api = 'settings.update'
msg.api = 'task.create'
msg.api = 'task.get'
msg.api = 'template.create'
msg.api = 'template.delete'
msg.api = 'template.get'
msg.api = 'template.massadd'
msg.api = 'template.massremove'
msg.api = 'template.massupdate'
msg.api = 'template.update'
msg.api = 'templatedashboard.create'
msg.api = 'templatedashboard.delete'
msg.api = 'templatedashboard.get'
msg.api = 'templatedashboard.update'
msg.api = 'trend.get'
msg.api = 'trigger.adddependencies'
msg.api = 'trigger.create'
msg.api = 'trigger.delete'
msg.api = 'trigger.deletedependencies'
msg.api = 'trigger.get'
msg.api = 'trigger.update'
msg.api = 'triggerprototype.create'
msg.api = 'triggerprototype.delete'
msg.api = 'triggerprototype.get'
msg.api = 'triggerprototype.update'
msg.api = 'user.create'
msg.api = 'user.delete'
msg.api = 'user.get'
msg.api = 'user.logout'
msg.api = 'user.update'
msg.api = 'usergroup.create'
msg.api = 'usergroup.delete'
msg.api = 'usergroup.get'
msg.api = 'usergroup.update'
msg.api = 'usermacro.create'
msg.api = 'usermacro.createglobal'
msg.api = 'usermacro.delete'
msg.api = 'usermacro.deleteglobal'
msg.api = 'usermacro.get'
msg.api = 'usermacro.update'
msg.api = 'usermacro.updateglobal'
msg.api = 'valuemap.create'
msg.api = 'valuemap.delete'
msg.api = 'valuemap.get'
msg.api = 'valuemap.update'

```

## sample flow

```json
[{"id":"df103346.dbba5","type":"inject","z":"52583d9f.0ddc34","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":300,"y":60,"wires":[["551cb18.605b05"]]},{"id":"51f3695b.de0cc8","type":"debug","z":"52583d9f.0ddc34","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","statusVal":"","statusType":"auto","x":810,"y":60,"wires":[]},{"id":"551cb18.605b05","type":"function","z":"52583d9f.0ddc34","name":"","func":"msg.payload = {}\nmsg.api = 'host.get'\nmsg.api = 'dhost.get'\nmsg.payload.selectInterfaces = 'extend'\nmsg.payload.limit = 100;\nreturn msg;","outputs":1,"noerr":0,"initialize":"","finalize":"","x":460,"y":60,"wires":[["b1cb354f.0e4008"]]},{"id":"b1cb354f.0e4008","type":"zabbix","z":"52583d9f.0ddc34","name":"","api":"","creds":"640f4a2b.a018f4","x":630,"y":60,"wires":[["51f3695b.de0cc8"]]},{"id":"640f4a2b.a018f4","type":"zabbixNode","name":"zabbix server info"}]
```

## sample response 
```json
[{"hostid":"10383","proxy_hostid":"0","host":"ip-10-0-2-209-master","status":"0","disable_until":"0","error":"","available":"1","errors_from":"0","lastaccess":"0","ipmi_authtype":"-1","ipmi_privilege":"2","ipmi_username":"","ipmi_password":"","ipmi_disable_until":"0","ipmi_available":"0","snmp_disable_until":"0","snmp_available":"0","maintenanceid":"0","maintenance_status":"0","maintenance_type":"0","maintenance_from":"0","ipmi_errors_from":"0","snmp_errors_from":"0","ipmi_error":"","snmp_error":"","jmx_disable_until":"0","jmx_available":"0","jmx_errors_from":"0","jmx_error":"","name":"ip-10-0-2-209-master","flags":"0","templateid":"0","description":"","tls_connect":"1","tls_accept":"1","tls_issuer":"","tls_subject":"","tls_psk_identity":"","tls_psk":"","proxy_address":"","auto_compress":"1","discover":"0","custom_interfaces":"0","inventory_mode":"-1","interfaces":[{"interfaceid":"8","hostid":"10383","main":"1","type":"1","useip":"1","ip":"54.151.144.114","dns":"","port":"10050","details":[]}]}]
```
