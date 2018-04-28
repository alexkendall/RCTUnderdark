//
// See: http://facebook.github.io/react-native/releases/0.43/docs/native-modules-ios.html#exporting-swift
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(NetworkManagerEventEmitter, RCTEventEmitter)

RCT_EXTERN_METHOD(supportedEvents)

@end
