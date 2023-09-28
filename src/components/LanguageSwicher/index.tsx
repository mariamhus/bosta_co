import  { useCallback, useState, useEffect, useRef} from "react";
import { RootState } from "../../stores/store";
import { setLanguage } from "../../actions/langActions";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";

export default function Main() {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state: RootState) => state.lang);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownE1 = useRef<HTMLUListElement>(null);

  const handleClickOutside = useCallback(
    (e: any) => {
      if (
        showDropdown &&
        e.target.closest(".dropdown") !== dropdownE1.current
      ) {
        setShowDropdown(false);
      }
    },
    [showDropdown, setShowDropdown, dropdownE1]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const chooseLanguageHandler = (value: string) => {
     setShowDropdown(false);
     dispatch(setLanguage(value));
     window.location.reload();
  };

  return (
      <div className="flex space-x-2 text-white">
        <div className="p-2">
                    <select
                    name="lang"
                      value={String(language)}
                      onChange={(e: any) => {
                        chooseLanguageHandler(e);
                      }}
                      required
                      className="w-16 text-white"
                    >
                      
                            <option value={"EN"}>
                              {" "}
                              EN
                            </option>
                            <option value={"AR"}>
                              {" "}
                              AR
                            </option>
                    </select>
                  </div>
      </div>
  );
}
