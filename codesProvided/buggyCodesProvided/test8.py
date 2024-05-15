def mod(ran, key):
    loop = key - 6
    for i in range(ran):
        loop = ((loop + 6) + 6 * i * (i + 2)) % key
    return loop
