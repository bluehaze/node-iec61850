#pragma once

#include <napi.h>

class Iec61850 : public Napi::ObjectWrap<Iec61850>
{
public:
    Iec61850(const Napi::CallbackInfo&);
    Napi::Value Greet(const Napi::CallbackInfo&);

    static Napi::Function GetClass(Napi::Env);

private:
    std::string _greeterName;
};
