import urllib.request

files = {1: ["https://raw.githubusercontent.com/Lutsic/crx-extension-downloader/refs/heads/main/python_tools/extension_downloader.py", "extension_downloader.py"], 2: ["https://raw.githubusercontent.com/Lutsic/crx-extension-downloader/refs/heads/main/python_tools/crx_link_builder.py","crx_link_builder.py"]}
2
print("Select an option: \n1 - Download everything (Recommended)\n2 - Select files to download")
mode = str(input())
if mode == "1":
    count = 0
    while count != 1:
        count += 1
        url = files[count][0]
        try:
            urllib.request.urlretrieve(url, files[count][1])
            print("Downloaded ", count, "/3", sep="")
        except Exception as e:
            print("Error:", e)
    print("Downloading completed. You can close this window.")
if mode == "2":
    print("Select scripts one by one. Enter 0 when you finished downloading. \n1 - extension downloader\n2 - crx link builder")
    while True:
        sel = int(input())
        if sel == 0:
            print("Downloading completed. You can close this window.")
            break
        url = files[sel][0]
        try:
            urllib.request.urlretrieve(url, files[sel][1])
            print(files[sel][1], "downloaded.")
        except Exception as e:
            print("Error:", e)
gg = input()