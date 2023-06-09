for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    basic.pause(400)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(500)
}
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
