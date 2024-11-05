{
  'variables': {
    'sysroot': '<!(echo $STAGING_DIR)',
  },
  'targets': [
    {
      'target_name': 'iec61850-native',
      'sources': [ 'src/iec61850.cc' ],
      'include_dirs': ["<!@(node -p \"require('node-addon-api').include\")","<(sysroot)/usr/include/libiec61850"],
      'dependencies': ["<!(node -p \"require('node-addon-api').gyp\")"],
      'libraries': ["<(sysroot)/usr/lib/libiec61850.so"],
      'cflags!': [ '-fno-exceptions' ],
      'cflags_cc!': [ '-fno-exceptions' ],
      'xcode_settings': {
        'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
        'CLANG_CXX_LIBRARY': 'libc++',
        'MACOSX_DEPLOYMENT_TARGET': '10.7'
      },
      'msvs_settings': {
        'VCCLCompilerTool': { 'ExceptionHandling': 1 },
      }
    }
  ]
}
