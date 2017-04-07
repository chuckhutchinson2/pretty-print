package hello

import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin

import groovy.json.JsonOutput

import org.slf4j.*
import groovy.util.logging.Slf4j

@Slf4j
@RestController
@CrossOrigin(origins = "*")
public class PrettyPrintController {
	@RequestMapping(value = "/print", method=RequestMethod.POST, produces="application/json", consumes="application/json")
	public @ResponseBody String print(@RequestBody String data) {
		log.info(data)
		return JsonOutput.prettyPrint(data)
	}
}
