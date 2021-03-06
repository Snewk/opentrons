from opentrons import containers, instruments

# from opentrons import robot
# robot.connect()
# robot.home()
# print('homed')

tipracks = [
    containers.load('tiprack-200ul', slot)
    for slot in ('A4', 'C1')]

single = instruments.Pipette(
    mount='right',
    max_volume=300,
    min_volume=10,
    name="p200",
    tip_racks=tipracks)

for tiprack in tipracks:
    for tip in (tiprack[0], tiprack[-1]):
        single.pick_up_tip(tip)
        single.drop_tip(tip)
