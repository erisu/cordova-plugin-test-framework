@objc(CDVTestFrameworkPlugin) class CDVTestFrameworkPlugin : CDVPlugin {
    var environmentType: String = "unknown"

    override func pluginInitialize() {
        super.pluginInitialize()

        #if targetEnvironment(simulator)
            environmentType = "simulator"
        #else
            environmentType = "device"
        #endif
    }

    @objc(getEnvironmentType:)
    func getEnvironmentType(command: CDVInvokedUrlCommand) {
        let pluginResult = CDVPluginResult(status: CDVCommandStatus_OK, messageAs: environmentType)
        self.commandDelegate.send(pluginResult, callbackId: command.callbackId)
    }
}
