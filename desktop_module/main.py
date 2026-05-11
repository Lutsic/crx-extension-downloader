#Set variable below to True to enable lite mode, that lets programm work on Online Python Compilers like https://www.programiz.com/python-programming/online-compiler/
lite_mode = False

#config // skipped if lite_mode is True
config_list = []
if lite_mode == False:
    while True:
        try:
            with open("config.txt", "r") as config:
                for line in config:
                    key, value = line.strip().split("=")
                    config_list.append(value == "True")
            break
        except FileNotFoundError:
            print("Config file not found. Creating...")
            with open("config.txt", "w") as config:
                config.write("copy_to_clipboard=True\n")
                config.write("lite_mode=False\n")
                config.write("dev_mode=False\n")
                config.write("DOES NOT WORK fast_search=False\n")
    #Parameters // You can replace "config_list[]" with True or False if you need.
    try:
        copy_to_clipboard = config_list[0]
        lite_mode = config_list[1]
        dev_mode = config_list[2]
        fast_search = config_list[3]
    except IndexError:
        copy_to_clipboard = False
        lite_mode = False
        dev_mode = False
        fast_search = False
        print("Something went wrong with config file, all options have been disabled.")
    #imports
    import webbrowser
    if copy_to_clipboard == True:
        import pyperclip
    import urllib.request
    import json
    from urllib.parse import unquote
else:
    copy_to_clipboard = False
    dev_mode = False
    fast_search = False

if dev_mode == True:
    print("copy_to_clipboard:",copy_to_clipboard,"\nlite_mode:",lite_mode,"\ndev_mode:",dev_mode,"\nfast_search:",fast_search)


while True:
    if lite_mode == False:
        print("\nChoose mode: \n1 - Extensions Search \n2 - Web module \n3 - CRX link builder  \n\nEnter !q to return to this menu \nEnter !config to see help about config file\n")
    else:
        print("\nChoose mode: \n*Unavailable with lite mode* \n2 - Web module \n3 - CRX link builder  \n\nEnter !q to return to this menu \nEnter !config to see help about config file\n")
    main_mode = str(input())
    if main_mode == "!q" and dev_mode == True:
        break
    if main_mode == "!config":
        print("\nlite_mode - Lets programm work on online Python compilers. \ncopy_to_clipboard - Copying many things to clipboard automatically for you.\nfast_search - Uses C++ for search to achieve higher speed.\ndev_mode - Prints some useful information")
        input()

    #1 - Search
    if main_mode == "1" and lite_mode == False:
            search_mode = "1"

            if search_mode == "!q":
                break

            if search_mode == "1":
                while True:
                    try:
                        with open("data.js", "r") as global_data:
                            global_data.close()
                            break
                            
                    except FileNotFoundError:
                        print("Extensions data file is missing! \nDownloading...") 
                        url = "https://github.com/Lutsic/crx-extension-downloader/releases/download/release/data.js"
                        save_path = "data.js"
                        try:
                            urllib.request.urlretrieve(url, save_path)
                            print("File downloaded succesfully!\n")
                        except FileNotFoundError:
                            print("Something went wrong during file downloading!")
                            break
                            
                if fast_search == False:
                    try:
                        with open("data.js", "r", encoding="utf-8") as f:
                            content = f.read()

                            content = content.replace("const DATA = ", "", 1)

                    
                            if content.endswith(";"):
                                content = content[:-1]

                            data = json.loads(content)
                            while True:
                                search = input("Search: ").lower()
                                if search == "!q":
                                    break
                                for name, url in data.items():
                                    decoded_name = unquote(name)

                                    if search in decoded_name.lower():
                                        print(decoded_name)
                                        print(url)
                    except FileNotFoundError:
                        print("Cannot access data.js file!")
                else:
                    print("Does not supported currently! Turn off fast search")



    #2 - Web Module
    if main_mode == "2":
        if lite_mode == False:
            webbrowser.open("https://lutsic.github.io/crx-extension-downloader/web_module/")
        else:
            print("Follow this url to access web module:\n", "https://lutsic.github.io/crx-extension-downloader/web_module/")
    

    #3 - CRX link builder
    if main_mode == "3":
        while True:
            url = input("\nEnter ID or webstore URL:")
            if url == "!q":
                break
            url_sep1 = url.split("/")
            url_sep2 = url_sep1[-1]
            url_sep3 = url_sep2.split("?")
            ext_id = url_sep3[0]
            print("\n","https://clients2.google.com/service/update2/crx?response=redirect&prodversion=122.0&acceptformat=crx2,crx3&x=id%3D", ext_id, "%26installsource%3Dondemand%26uc", sep="")
            if copy_to_clipboard == True: 
                pyperclip.copy(f"https://clients2.google.com/service/update2/crx?response=redirect&prodversion=122.0&acceptformat=crx2,crx3&x=id%3D{ext_id}%26installsource%3Dondemand%26uc")
                print("\nURL copied to clipboard!")